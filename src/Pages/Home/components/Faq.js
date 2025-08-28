import Accordian from "./Accordian";


const Faq = () => {
  const faqs = [
        {
          "id": 1,
          "question": "Why should I use CodeCamp?",
          "answer": "You should use CodeCamp for its wide variety of courses, affordable and flexible pricing with lifetime access, self-paced learning that fits your schedule, and mobile-friendly platform for learning on the go. It's beneficial for beginners, career advancers, and hobbyists looking to gain foundational or professional skills, explore personal interests, or even prepare for specific certifications at a lower cost than traditional education. "
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes you cn, but make sure that you're logged in while surfing"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "No, after purchasing our eBook there is no refund back"
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes we do. Please contact to our customer care service center for more informtation to know the process"
        }
    ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Want an answer?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    {faqs.map((faq)=> 
                    <Accordian key={faq.id} faq = {faq}/>)}
            </div>
      </section>
  )
}

export default Faq
