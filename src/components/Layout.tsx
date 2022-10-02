import { Navbar } from "./Navbar";
import { Translate } from "./Translate";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Translate/>
      <main>{children}</main>
    </>
  )
}