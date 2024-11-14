import { ProjectsServices } from "@/app/infrastructure/services/projects.service";
import DashboardTemplate from "@/ui/template/dashboard/dashboardTemplate";

interface IProps{
    searchParams: IProjectsRequest;
  }

const useProjectService = new ProjectsServices();

export default async function DashboardPage({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await useProjectService.getProjects({page, size: 7});
    console.log(data);
    
    const totalProjects = data.metadata.totalItems;

    const activeProjects = data.data.filter(project => project.isActive).length;

    const uniqueOrganizerIds = new Set(data.data.map(project => project.organizer.id));
    const organizers = uniqueOrganizerIds.size;

    return (
        <>
            <DashboardTemplate 
                data={data} 
                totalProjects={totalProjects} 
                activeProjects={activeProjects} 
                organizers={organizers} 
            />
        </>
    );
}
