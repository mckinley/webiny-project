import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
    domains({ params }) {
        const { env } = params.run;
        if (env === "prod") {
            return {
                domains: ["mustacherides.com", "*.mustacherides.com"],
                sslSupportMethod: "sni-only",
                acmCertificateArn:
                    "arn:aws:acm:us-east-1:905418069383:certificate/47a87675-7701-4b09-b830-8b0ac152aafc"
            };
        }
    }
});
