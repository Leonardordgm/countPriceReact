function MyButton({ count, onClick }) {
    

    return (
      <>
      { count < 10 ? (<button onClick={onClick}>
         {count} 
      </button>)
    : (
    <button>
      10. 
   </button>)
    }
    </>
    )

  }

export default MyButton
