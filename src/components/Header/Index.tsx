import { HeaderContainer, HeaderContent, NewTransactionsButton } from './style'
import LogoImg from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTrasactionModal } from '../NewTrasactionsModal/Index'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTrasactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
