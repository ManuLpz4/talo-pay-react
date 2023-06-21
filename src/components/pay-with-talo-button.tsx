const PayWithTaloButton = (props: PayWithTaloButtonProps) => {
  const paymentUrl = `https://talo.com.ar/cryptonube/${props.userId}`;

  return (
    <a href={paymentUrl} target="_blank">
      <div style={{
        backgroundColor: "#79eea1",
        color: "white",
        fontWeight: "bold",
        height: 40,
        padding: "0 16px"
      }}>Pay with Talo</div>
    </a>
  );
};

export default PayWithTaloButton;
