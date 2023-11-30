import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg=slate-50">
            <Container>
                <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">

                        <Link
                            href="https://www.instagram.com/la_roti_sp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                            className="group"
                            aria-label="La Roti on Instagram"
                        >
                            <Instagram className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700" />
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()} La Roti. All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;