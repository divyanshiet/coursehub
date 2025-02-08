import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filteredfetchData } from '../../redux/filteredslice';

export default function Completed({ courseId })
{
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!data) {
      dispatch(filteredfetchData());
    }
  }, [dispatch, data]);
  console.log(data);
  const courseData = data?.find((course) => course.id === courseId);
  console.log(courseData);
    return(
        <>
          <div>This is completed </div>
        </>
    )
    
}
