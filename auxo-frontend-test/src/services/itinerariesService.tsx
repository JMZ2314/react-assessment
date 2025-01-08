"use server"

import ApiResponse from "@/types/apiResponse"
import { Itinerary } from "@/types/itineraries"
import AxiosInstance from "@/utils/axios/axiosInstance"

export const getItineraries = async () : Promise<ApiResponse<Itinerary[]>> => AxiosInstance.get<ApiResponse<Itinerary[]>>('/itineraries')
                                                                                           .then( res => res)
                                                                                           .catch( err => err)