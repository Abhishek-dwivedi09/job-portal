import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { JOB_API_END_POINT } from "../utils/constant";


const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchText } = useSelector(store => store.job);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                axios.defaults.withCredentials = true;
                // const res = await axios.get(`https://jobportal-youtube.onrender.com/api/v1/job/all?keyword=${searchText}`);
                const res = await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true});

               
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, [])
}
export default useGetAllJobs;