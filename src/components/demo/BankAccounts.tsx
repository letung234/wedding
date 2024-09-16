import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BankAccounts() {
    const accounts = [
        { bank: 'BCA', number: '1234567890' },
        { bank: 'BRI', number: '0987654321' },
        { bank: 'MANDIRI', number: '1122334455' },
    ]

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Bank Accounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accounts.map((account, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{account.bank}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-mono">{account.number}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}