import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [texts, setTexts] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !texts) return alert("fill all detail")

    const newTask = [...task];
    newTask.push({ title, texts })
    setTask(newTask)
    console.log(newTask);
    setTitle('')
    setTexts('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }



  return (
    <div className='h-screen lg:flex bg-black text-white '>

      <form className="flex gap-4 lg:w-1/2 items-start flex-col p-5" onSubmit={(e) => submitHandler(e)}>
        <h1 className='text-2xl font-bold mt-5'>Add Notes</h1>

        <input type="text" placeholder="Enter Notes Heading" className='px-5 py-2 border-2 w-full rounded outline-none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea placeholder='Enter Notes' className='h-42 px-5 py-2 border-3 w-full rounded outline-none'
          value={texts}
          onChange={(e) => setTexts(e.target.value)}
        ></textarea>

        <button className='bg-white w-full outline-none rounded  active:bg-blue-500 hover:bg-blue-500 text-black py-2'>Add notes</button>

      </form>
      <div className=' lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-2xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 h-full mt-5 overflow-auto'>
          {task.map((item, idx) => {
            return <div className='h-52 flex justify-between flex-col w-40 rounded-2xl bg-[url("https://imgs.search.brave.com/0URcI9QeB20KSXJcNsLG9ZSyWOYKDXMQXWO0HwVINbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n")] bg-cover text-black p-4' key={idx}>

              <div className='mt-7'>
                <h3 className='font-bold text-xl leading-tight text-blue-500'>{item.title}</h3>
                <p className='text-gray-400'>{item.texts}</p>
              </div>
              <button className='bg-amber-900 cursor-pointer active:scale-95 text-white rounded-2xl hover:bg-amber-900'
                onClick={() => deleteNote(idx)}>
                Delete</button>
            </div>
          })}
        </div>
      </div>


    </div >
  )
}

export default App