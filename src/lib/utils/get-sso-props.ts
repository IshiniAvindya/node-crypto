import crypto from "crypto";

export function getHyvorTalkSSOProps(): {
  ssoUser: string;
  ssoHash: string;
} {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    timestamp: Math.floor(Date.now() / 1000),
  };

  const userEncoded = Buffer.from(JSON.stringify(user)).toString("base64");

  const SSO_PRIVATE_KEY = process.env.HYVOR_TALK_SSO_PRIVATE_KEY;
  if (!SSO_PRIVATE_KEY) throw new Error("Missing SSO key");

  const ssoHash = crypto
    .createHmac("sha256", SSO_PRIVATE_KEY)
    .update(userEncoded)
    .digest("hex");

  return {
    ssoUser: userEncoded,
    ssoHash,
  };
}
