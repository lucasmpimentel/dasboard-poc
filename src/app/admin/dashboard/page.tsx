import Link from "next/link"
import {
  Bell,
  CircleUser,
  Menu,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle/mode-toggle"
import Image from "next/image"
import NavigationBar from "../components/navigation-bar"
import DasboardInfoCard from "./components/dasboard-progress-info-card"
import UserProfileMenu from "@/components/user-profille-menu/user-profille-menu"
import PaymentOrdersTable from "../components/payment-orders-table"

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image  className="h-6 w-6" src={""} alt={"Logomarca SuiteWeb"} />
              <span className="">SuiteWeb</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <NavigationBar />
          </div>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image className="h-6 w-6" src={""} alt={"Logomarca Suiteweb"} />
                  <span>SuiteWeb</span>
                </Link>
                <NavigationBar />
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ModeToggle />
          <UserProfileMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <DasboardInfoCard 
              label={"Entrada semana"} 
              valueTitle={"R$ 15.000,00"} 
              progressValue={37} 
              content={"37% maior que a semana passada"}
            />
            <DasboardInfoCard 
              label={"Entrada Mês"} 
              valueTitle={"R$ 25.940,00"} 
              progressValue={-17} 
              content={"17% menor que o mês passado"}
            />
          </div>
          <PaymentOrdersTable />
        </main>
      </div>
    </div>
  )
}
