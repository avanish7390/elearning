const CourseIdPage = ({
    params
}: {
    params:{ courseId: string }
}) => {
    return ( 
        <div>
            course Id: { params.courseId}
        </div>
     );
}
 
export default CourseIdPage;