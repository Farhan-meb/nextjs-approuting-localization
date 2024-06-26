"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MainLayout({ children }: any) {
    return <body className={inter.className}>{children}</body>;
}

export default MainLayout;
