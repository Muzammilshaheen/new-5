import React from "react";

const page = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:roun rounded-full mx-auto mg-right" src="/rehan.jpg" alt="" width="584" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Maria Ghafoor – Science Teacher

Maria Ghafoor is a passionate and dedicated science teacher with a strong commitment to fostering a love for learning in her students. With a background in [insert specific field of science, e.g., Biology, Chemistry, Physics], she brings a wealth of knowledge and experience to the classroom. Maria excels at making complex scientific concepts accessible and engaging through hands-on experiments, interactive lessons, and the integration of technology.

She emphasizes critical thinking, problem-solving, and the application of scientific principles to real-world scenarios, encouraging students to explore and question the world around them. Her teaching philosophy is rooted in creating an inclusive and supportive learning environment where every student feels valued and motivated to achieve their best."
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Maria Gahafoor
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Teacher
      </div>
    </figcaption>
  </div>
</figure>
  )
}
export default page