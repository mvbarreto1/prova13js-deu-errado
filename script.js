let saldo = 1000.00;

        function performOperation() {
            const operation = document.getElementById('operation').value;
            const amount = parseFloat(document.getElementById('amount').value);
            let resultMessage = '';

            if (isNaN(amount) || amount < 0) {
                resultMessage = 'Valor inválido. Por favor, insira um valor positivo.';
            } else {
                switch (operation) {
                    case 'consultar':
                        resultMessage = `Seu saldo atual é R$ ${saldo.toFixed(2)}`;
                        break;
                    case 'sacar':
                        if (amount > saldo) {
                            resultMessage = 'Saldo insuficiente para a operação.';
                        } else {
                            saldo -= amount;
                            resultMessage = `Saque de R$ ${amount.toFixed(2)} realizado com sucesso. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
                        }
                        break;
                    case 'depositar':
                        saldo += amount;
                        resultMessage = `Depósito de R$ ${amount.toFixed(2)} realizado com sucesso. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
                        break;
                    default:
                        resultMessage = 'Por favor, selecione uma operação.';
                        break;
                }
            }

            document.getElementById('result').innerText = resultMessage;
        }