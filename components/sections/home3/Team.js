import TeamOne from "@/components/common/TeamOne"
export default function Team() {
  
  return (
      <div>
          <TeamOne 
            className="team-one style2"
            sectionTitle="Experienced Attorneys"
            subTitle="Meet Our Lawyers"
            teamData={[
                {
                name: 'Pamela Lasen',
                position: 'Senior Partner',
                image: '/assets/img/team/team-v1-img1.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                },
                {
                name: 'Beverly Daniels',
                position: 'Senior Partner',
                image: '/assets/img/team/team-v1-img2.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                },
                {
                name: 'Fred Vaughan',
                position: 'Senior Partner',
                image: '/assets/img/team/team-v1-img3.png',
                social: [
                    { url: '#', iconClass: 'icon-icon-4' },
                    { url: '#', iconClass: 'icon-icon-3' },
                    { url: '#', iconClass: 'icon-icon-2' },
                    { url: '#', iconClass: 'icon-icon-1' },
                ]
                }
            ]}
        />
      </div>
  );
}
