import { useState, FormEvent } from 'react'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionsModal/styles'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean,
  handleCloseNewTransactionModal: () => void
}

export function NewTransactionsModal({isNewTransactionModalOpen, handleCloseNewTransactionModal}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title, 
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    handleCloseNewTransactionModal()
  }
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type='button'
        onClick={handleCloseNewTransactionModal}
        className='react-modal-close'>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
        type="text"
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

        <input 
        type="number"
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}