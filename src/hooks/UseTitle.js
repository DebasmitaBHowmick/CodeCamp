import { useEffect } from "react"

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - CodeCamp`
  }, [title])
};

export default UseTitle
