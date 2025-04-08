import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = () => {
    return (
        <div className="mx-20">
            <div className="text-2xl font-semibold mx-10 flex flex-col flex-wrap">Recommended Talent</div>
            {
                talents.map((item, index) => index < 4 && <TalentCard key={index} {...item} />)
            }
        </div>
    )
}
export default RecommendedTalent;