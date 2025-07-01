import { Heart, Utensils, Camera, Globe } from 'lucide-react';
interface StatsSectionProps {
  collabCount: number;
}
const StatsSection = ({
  collabCount
}: StatsSectionProps) => {
  const stats = [{
    number: collabCount.toLocaleString(),
    label: "Successful Collaborations",
    icon: Heart
  }, {
    number: "2,500+",
    label: "Active Restaurants",
    icon: Utensils
  }, {
    number: "8,900+",
    label: "Food Creators",
    icon: Camera
  }, {
    number: "150+",
    label: "Cities Worldwide",
    icon: Globe
  }];
  return;
};
export default StatsSection;