// components/ClientComments.tsx
"use client";

import { Comments } from "@hyvor/hyvor-talk-react";

type Props = {
  ssoUser: string;
  ssoHash: string;
};

export default function ClientComments({ ssoUser, ssoHash }: Props) {
  return (
    <Comments
      website-id={13328}
      page-id="home"
      sso-user={ssoUser}
      sso-hash={ssoHash}
    />
  );
}
