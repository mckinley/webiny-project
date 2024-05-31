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
                    "arn:aws:acm:us-east-1:905418069383:certificate/f8bbe712-0cd8-4492-973c-259b0c05e283"
            };
        }
    }
});
