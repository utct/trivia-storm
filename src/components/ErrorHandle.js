const ErrorHandle = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          marginTop : 20,
          textAlign: "center",
          color: "red",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorHandle;