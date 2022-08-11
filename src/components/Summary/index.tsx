import { Container } from "./styles";
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgTotal from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgIncome} alt="Entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={imgOutcome} alt="Saídas" />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="Total" />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  )
}