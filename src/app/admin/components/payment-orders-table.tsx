"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import PaymentOrder from "../interfaces/payment-order-interface"
import mockData from "../mock/payment-orders.mock"


function MyTable({ data, depth = 0 } : { data: PaymentOrder[], depth?: number }) {
  return (
    <Table>
      {depth === 0 && (
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead className="hidden md:table-cell">Vencimento</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="font-medium">{item.company}</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {item.email}
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{item.date}</TableCell>
            <TableCell>
              <Badge 
                className="text-xs" 
                variant={
                  item.status === "Enviado" ? "secondary" :
                  item.status === "Aguardando" ? "outline" :
                  "default"
                }
              >
                {item.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default function PaymentOrdersTable() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Ordems de pagamento</CardTitle>
        <CardDescription>Últimas ordems de pagamento.</CardDescription>
      </CardHeader>
      <CardContent>
        <MyTable data={mockData} />
      </CardContent>
    </Card>
  )
}