import { Header } from '../../components/Header/Index'
import { Summary } from '../../../src/components/Summary/Index'
import { SearchForm } from '../Transactions/Components/SearchForm/Index'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './style'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width="40%">{item.description}</td>
                  <td>
                    <PriceHighlight variant={item.type}>
                      {item.type === 'outcome' && '- '}
                      {priceFormatter.format(item.price)}
                    </PriceHighlight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
