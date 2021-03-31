class PaymentPage {
    private payByBankWireButton: string
    private confirmOrderButton: string
    private orderCompletedText: string 

    constructor() {
        this.payByBankWireButton = '.bankwire'
        this.confirmOrderButton = '#cart_navigation > button'
        this.orderCompletedText = '#center_column > div > p > strong'
    }

    public goToPayByBankWireOption(): void {
        cy.get(this.payByBankWireButton).click()
    }

    public goToConfirmMyOrderButton(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public verifyOrderCompleted(): void {
        cy.get(this.orderCompletedText)
        .should("have.text", "Your order on My Store is complete.")
    }

}
export { PaymentPage }