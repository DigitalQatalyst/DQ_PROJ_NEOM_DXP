"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Hide default Navbar and Footer on dashboard and onboarding pages
    const isDashboard = pathname?.startsWith("/dashboard");
    const isOnboarding = pathname?.startsWith("/onboarding");
    const isSignIn = pathname === "/signin";

    const hideNav = isDashboard || isOnboarding || isSignIn;

    return (
        <>
            {!hideNav && <Navbar />}
            <main className={!hideNav ? "min-h-screen pt-20" : "min-h-screen"}>
                {children}
            </main>
            {!hideNav && <Footer />}
        </>
    );
}
