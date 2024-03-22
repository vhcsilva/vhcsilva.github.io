import { AcademicCap } from '@/assets/icons/academic-cap'
import { BriefCase } from '@/assets/icons/brief-case'
import { Section } from '@/components/Section'

export function TimelineSection() {
  const timelineItems = [
    {
      id: 0,
      role: 'Frontend Engineer',
      company: 'LayerX',
      companyUrl: 'https://layer.xyz',
      location: 'Porto, Portugal (Remote)',
      start: '11/2021',
      end: 'now',
      type: 'job',
      techs: 'NextJS, Typescript, NodeJS, Jest, PostgreSQL',
      marginClasses: '-mt-[33px]'
    },
    {
      id: 1,
      role: 'Systems Analyst',
      company: 'Asa Branca',
      companyUrl: 'https://asabranca.ind.br',
      location: 'Alagoas, Brazil',
      start: '09/2019',
      end: '11/2021',
      type: 'job',
      techs: 'NextJS, ReactJS, Django, SQL Server, Oracle Database',
      marginClasses: 'mt-[35px]'
    },
    {
      id: 2,
      role: 'IT Intern',
      company: 'Asa Branca',
      companyUrl: 'https://asabranca.ind.br',
      location: 'Alagoas, Brazil',
      start: '12/2018',
      end: '09/2019',
      type: 'job',
      techs: 'Python, Django, Javascript, SQL Server, Customer support',
      marginClasses: 'mt-[33px]'
    },
    {
      id: 3,
      role: 'Bachelor of Computer Science',
      company: 'UFAL',
      companyUrl: 'https://ufal.br/',
      location: 'Alagoas, Brazil',
      start: '01/2016',
      end: '12/2020',
      type: 'education',
      techs: '',
      marginClasses: 'mt-[345px]'
    },
    {
      id: 4,
      role: 'Algorithms and Database monitor',
      company: 'IFAL',
      companyUrl: 'https://www2.ifal.edu.br/',
      location: 'Alagoas, Brazil',
      start: '06/2013',
      end: '12/2013',
      type: 'job',
      techs: 'Algorithms, Database, MySQL, Java, C',
      marginClasses: 'mt-[158px]'
    },
    {
      id: 5,
      role: 'Computer Technician',
      company: 'IFAL',
      companyUrl: 'https://www2.ifal.edu.br/',
      location: 'Alagoas, Brazil',
      start: '01/2011',
      end: '12/2014',
      type: 'education',
      techs: '',
      marginClasses: 'mt-[197px]'
    }
  ]

  return (
    <Section id="timeline" title="My timeline">
      <div className="flex justify-center text-white">
        <div className="flex flex-col w-1/2">
          {timelineItems
            .filter(({ type }) => type === 'education')
            .map((item) => (
              <div className={`${item.marginClasses} mr-[14px] flex flex-col gap-1 items-end`}>
                <span className="text-gray-300 text-sm">
                  {item.start} - {item.end}
                </span>
                <h3 className="font-semibold flex gap-2 text-sm items-center">
                  {item.role} -{' '}
                  <a href={item.companyUrl} target="_blank" className="text-green underline">
                    {item.company}
                  </a>
                  <AcademicCap />
                </h3>
                <span className="text-gray-300 text-sm">{item.techs}</span>
              </div>
            ))}
        </div>

        <div className={`border relative h-[627px]`}>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] -top-[4px]"></div>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] top-[125px]"></div>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] top-[250px]"></div>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] top-[375px]"></div>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] top-[500px]"></div>
          <div className="p-1.5 bg-white absolute rounded-full -left-[6px] top-[625px]"></div>
        </div>

        <div className="flex flex-col w-1/2">
          {timelineItems
            .filter(({ type }) => type === 'job')
            .map((item) => (
              <div className={`${item.marginClasses} ml-[14px] flex flex-col gap-1`}>
                <span className="text-gray-300 text-sm">
                  {item.start} - {item.end}
                </span>
                <h3 className="font-semibold flex gap-2 text-sm items-center">
                  <BriefCase />
                  {item.role} -{' '}
                  <a href={item.companyUrl} target="_blank" className="text-green underline">
                    {item.company}
                  </a>
                </h3>
                <span className="text-gray-300 text-sm">{item.techs}</span>
              </div>
            ))}
        </div>
      </div>
    </Section>
  )
}
