import Head from "next/head";
import { CircularProgress } from "@chakra-ui/progress";
import { useProgress, Html } from "@react-three/drei";
const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center><CircularProgress value={progress}/></Html>
    );
}

export default Loader;