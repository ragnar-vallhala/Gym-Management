import './Payment.css';

function PaymentCard() {
  const payments = [
    { PaymentID: "q27632sd", Date: "12/1/2024", Amount: "1200.00", PaymentMethod: "Online", Receiver: "Plan A Gym", Status: "Done" },
    { PaymentID: "b28371gf", Date: "11/25/2024", Amount: "1000.00", PaymentMethod: "Cash", Receiver: "Plan B Gym", Status: "Pending" },
    { PaymentID: "d98236ab", Date: "11/15/2024", Amount: "1500.00", PaymentMethod: "Card", Receiver: "Plan C Gym", Status: "Done" },
    { PaymentID: "m38726kh", Date: "11/10/2024", Amount: "1300.00", PaymentMethod: "Online", Receiver: "Plan D Gym", Status: "Failed" },
  ];

  return (
    <div className="payment-card">
      <h3>Payment History</h3>
      <ul className="payment-list">
        {payments.map((payment, index) => (
          <li key={index} className="payment-item">
            <p><strong>Payment ID:</strong> {payment.PaymentID}</p>
            <p><strong>Date:</strong> {payment.Date}</p>
            <p><strong>Amount:</strong> ${payment.Amount}</p>
            <p><strong>Payment Method:</strong> {payment.PaymentMethod}</p>
            <p><strong>Receiver:</strong> {payment.Receiver}</p>
            <p><strong>Status:</strong> <span className={`status ${payment.Status.toLowerCase()}`}>{payment.Status}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentCard;

