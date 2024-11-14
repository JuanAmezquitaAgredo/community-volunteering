'use client'
import CartInfo from "@/ui/atoms/cart";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import styled from "styled-components";
import MainComponent from "@/ui/organisms/dashboard/projects";
import { SearchComponent } from "@/ui/atoms/search";

interface IProsp {
    totalProjects: number;
    activeProjects: number;
    organizers: number;
    data: IProjectsResponse;
}
const PageContainer = styled.div`
    margin: auto;
    width: 95%;
    height: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderProjects = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BodyProjects = styled.div`
    padding: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
`;

const H2 = styled.h2`
    width: 100%;
    text-align: start;
    font-size: 20px;
`;

const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export default function DashboardTemplate({ data, totalProjects, activeProjects, organizers }: IProsp) {
    const handleEdit = (id: number) => {
        console.log("Editando proyecto con id: ", id);
    };

    const handleDelete = (id: number) => {
        console.log("Eliminando proyecto con id: ", id);
    };

    return (
        <PageContainer>
            <HeaderProjects>
                <CartInfo title="Total Proyectos" icon={<FaRegFolderOpen size={20} />} body={totalProjects} />
                <CartInfo title="Proyectos Activos" icon={<MdOutlineSignalCellularAlt size={20} />} body={activeProjects} />
                <CartInfo title="Organizadores" icon={<SlPeople size={20} />} body={organizers} />
                <CartInfo title="OProximo Proyecto" icon={<CiCalendar size={20} />} body="Invalid Date" />
            </HeaderProjects>
            <BodyProjects>
                <H2>Lista de Proyectos</H2>
                <Search>
                    <SearchComponent />
                </Search>
                <MainComponent data={data} onEdit={handleEdit} onDelete={handleDelete} />
            </BodyProjects>
        </PageContainer>
    )
}