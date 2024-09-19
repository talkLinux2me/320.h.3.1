import { useState } from "react"
let learners =
  [
    {
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ]

export default function App() {
  const [learnerData, setLearnerData] = useState(learners)
 

  return (
    <>
      <div className="text-center bg-sky-100 h-screen p-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Learners Data</h1>
    
        {
        learnerData.map((learner, index) =>(
          <div key={index} className="border-2 border-gray-400  w-1/2 m-auto p-5 bg-white">
            <ul>
            <li className="font-bold" >{learner.name}</li>
            <p className="text-justify">{learner.bio}</p>
            <div>
              {learner.scores.map((score, index)=>
              <li key={index}>{score.score}</li>
            )}
            </div>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white border-2 border-slate-100" onClick={() =>{
              setLearnerData(learners.filter((a) => a.name !== learner.name));
            }}>
              Delete Learner
            </button>
            </div>
            
        ))
        }

      </div>
    </>
  )
}