import { companyData } from "../Data/Company";

const AboutComp = () => {
    const company: { [key: string]: any } = companyData
    return (
        <div className="flex flex-col gap-8 mt-4">
            {
                Object.keys(company).map((key, index) => key != 'Name' && <div key={index}>
                    <div className="text-xl font-semibold mb-3 ">{key}</div>
                    {key != 'Website' && <div className="text-justify text-mine-shaft-300">{company[key]}</div>}
                    {key == 'Website' && <a href={company[key]} target="_blank" className="text-justify text-web-orange-500  hover:text-web-orange-700">{company[key]}</a>}
                    {key === 'Specialties' && (
                        <div className="space-y-1">

                            <ul className="space-y-1 text-mine-shaft-300 mt-4"> {/* Add margin-top to create gap between heading and list */}
                                {company[key].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>)
            }
        </div>
    )
}

export default AboutComp;