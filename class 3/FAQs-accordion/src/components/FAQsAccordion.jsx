import Mobile from '../assets/images/background-pattern-mobile.svg'
import Desktop from '../assets/images/background-pattern-desktop.svg'
import Star from '../assets/images/icon-star.svg'
import FAQItem from './FAQItem';
function FAQsAccordion() {
  const faqData = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer: " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <>
      <div className='w-full'>
        <div className="mobile:!hidden w-full " >
          <img src={Mobile} alt="" className="w-full" />
        </div>
        <div className="mobile:block hidden ">
          <img src={Desktop} alt="" />
        </div>
      </div>

      <div className='-mt-29  rounded-xl relative ml-auto mr-auto w-[85%] mobile:w-[45%] justify-center items-center bg-white shadow-2xl'>
        <div className="ml-8 flex pt-8 ">
          <img src={Star} alt="star" className='w-8' />
          <h1 className='ml-5 font-bold text-4xl  '>FAQs</h1>
        </div>
        <div className='ml-8 mr-8 pt-8 '>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

        <div className='text-center mt-30'>
          <p>
          Challenge by <a href="https://www.frontendmentor.io/home" target='_blank' className='text-purple-500 cursor-pointer'>Frontend Mentor</a>. Coded by <span className='text-purple-500 cursor-pointer'>Abebaw Tsega</span>.
          </p>
        </div>

    </>
  )
}

export default FAQsAccordion