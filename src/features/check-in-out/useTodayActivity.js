import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: stays } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activty"],
  });

  return { stays, isLoading };
}
