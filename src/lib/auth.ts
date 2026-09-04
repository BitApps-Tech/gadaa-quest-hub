export type Session = {
  phone: string;
};

type StoredUser = {
  password: string;
};

const SESSION_COOKIE = "gadaa_session";
const SESSION_KEY = "gadaa_session";
const USERS_KEY = "gadaa_users";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30;
export const AUTH_EVENT = "gadaa-auth";

export function normalizePhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (/^0[79]\d{8}$/.test(digits)) {
    return `+251${digits.slice(1)}`;
  }
  if (/^251[79]\d{8}$/.test(digits)) {
    return `+${digits}`;
  }
  if (/^[79]\d{8}$/.test(digits)) {
    return `+251${digits}`;
  }
  return null;
}

function readUsers(): Record<string, StoredUser> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(USERS_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, StoredUser>;
  } catch {
    return {};
  }
}

function writeUsers(users: Record<string, StoredUser>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function writeSession(session: Session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  document.cookie = `${SESSION_COOKIE}=1; Path=/; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function getClientSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      "phone" in parsed &&
      typeof parsed.phone === "string"
    ) {
      return { phone: parsed.phone };
    }
    return null;
  } catch {
    return null;
  }
}

export function readBrowserSessionPhone(): string | null {
  return getClientSession()?.phone ?? null;
}

export function signIn(
  phoneRaw: string,
  password: string,
): { ok: true; session: Session } | { ok: false; error: "invalid_phone" | "short_password" | "wrong_password" } {
  const phone = normalizePhone(phoneRaw);
  if (!phone) {
    return { ok: false, error: "invalid_phone" };
  }
  if (password.length < 6) {
    return { ok: false, error: "short_password" };
  }

  const users = readUsers();
  const existing = users[phone];
  if (existing) {
    if (existing.password !== password) {
      return { ok: false, error: "wrong_password" };
    }
  } else {
    users[phone] = { password };
    writeUsers(users);
  }

  const session = { phone };
  writeSession(session);
  return { ok: true, session };
}

export function signOut() {
  localStorage.removeItem(SESSION_KEY);
  document.cookie = `${SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
  window.dispatchEvent(new Event(AUTH_EVENT));
}
