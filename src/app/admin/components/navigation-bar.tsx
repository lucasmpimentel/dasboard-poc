'use client';

import { Home, Users, TrendingUpDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface DynamicNavLinkProps {
  href: string 
  label: string
  icon: React.ReactNode
}

export default function NavigationBar() {
  const selectedClasses = "text-primary bg-muted font-bold"
  const unselectedClasse = "text-muted-foreground"
  const iconClasses = "h-4 w-4"
  const path = usePathname()

  const links: DynamicNavLinkProps[] = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: <Home className={iconClasses} />
    },
    {
      href: "/admin/users-management",
      label: "Clientes",
      icon: <Users className={iconClasses} />
    },
    {
      href: "/admin/realtime-candle-chart",
      label: "Gráfico de velas",
      icon: <TrendingUpDown className={iconClasses} />
    }
  ]

  const DynamicNavLink = ({ href, label, icon }: DynamicNavLinkProps) => {
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${path === href ? selectedClasses : unselectedClasse}`}
      >
        { icon }
        { label }
      </Link>
    )
  }
  
  return (
    <nav className="grid gap-2 items-start px-2 text-lg md:text-sm font-medium lg:px-4">
      {links.map((link, i) => (
        <DynamicNavLink key={i} href={link.href} label={link.label} icon={link.icon} />
      ))}
    </nav>
  )
}
