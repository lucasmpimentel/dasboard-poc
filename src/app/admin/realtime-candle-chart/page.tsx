import NavigationBar from '../components/navigation-bar'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Bell, LucideTrendingUpDown, Menu, Search } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/mode-toggle/mode-toggle'
import UserProfileMenu from '@/components/user-profille-menu/user-profille-menu'
import { Input } from '@/components/ui/input'
import CandleChart from './components/candle-chart'
import ChartProvider from '@/providers/chart-provider'

export default function CandleChartPage() {
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link href="dashboard" className="flex items-center gap-2 font-semibold">
              <LucideTrendingUpDown  className="h-6 w-6" />
              <span className="">SuiteWeb</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <NavigationBar />
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
              <div className='text-lg font-medium'>
                <div className='flex h-14 items-center px-4'>
                  <Link href="/admin/dashboard" className="flex items-center gap-2 font-semibold">
                    <Image  className="h-6 w-6" src={""} alt={"Logomarca SuiteWeb"} />
                    <span className="">SuiteWeb</span>
                  </Link>
                </div>
                <NavigationBar />
              </div>
            </SheetContent>
          </Sheet>
          <div className='w-full flex-1'>
            <form>
              <div className="relative">
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type="search"
                  placeholder="Search"
                  className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
                />
              </div>
            </form>
          </div>
          <ModeToggle />
          <UserProfileMenu />
        </header>
        <ChartProvider>
          <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
            Candle
            <CandleChart />
          </main>
        </ChartProvider>
      </div>
    </main>
  )
}
