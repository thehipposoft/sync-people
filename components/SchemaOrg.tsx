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
                        "url": "https://insyncx.co",
                        "logo": "https://insyncx.co/assets/logo.png"
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg
