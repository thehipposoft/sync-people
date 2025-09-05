'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Insyncx",
                        "url": "https://insyncx.com",
                        "logo": "https://insyncx.com/assets/logo.png",
                        "sameAs": [
                            "https://www.facebook.com/profile.php?id=61561044445028",
                            "https://www.instagram.com/insyncx.au/",
                            "https://www.linkedin.com/company/insyncx/"
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg
