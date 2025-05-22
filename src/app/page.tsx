// app/page.tsx (Server Component - NO "use client")
import ClientComments from "@/lib/clientcomment";
import { getHyvorTalkSSOProps } from "@/lib/utils/get-sso-props";

export default function HomePage() {
  const { ssoUser, ssoHash } = getHyvorTalkSSOProps();

  return (
    <main>
      <h1>Welcome to My Blog</h1>
      <ClientComments ssoUser={ssoUser} ssoHash={ssoHash} />
    </main>
  );
}
