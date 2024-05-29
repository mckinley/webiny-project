import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
    domains() {
      return {
        domains: ["mustacherides.com"],
        sslSupportMethod: "sni-only",
        acmCertificateArn:
          "arn:aws:acm:us-east-1:445186575501:certificate/d361dba8-53c7-4b3a-938d-cf3be31132b0"
      };
    }
});
