"use server"

import ApiResponse from "@/types/apiResponse"
import { Itinerary, Leg } from "@/types/itineraries"
import AxiosInstance from "@/utils/axios/axiosInstance"


export const getItineraries = async () : Promise<ApiResponse<Itinerary[]>> => AxiosInstance.get<ApiResponse<Itinerary[]>>('/itineraries')
                                                                                           .then( res => res)
                                                                                           .catch( err => err)

export const getItineraryByID = async (id:string) : Promise<ApiResponse<Itinerary>> => AxiosInstance.get<ApiResponse<Itinerary[]>>(`/itineraries/${id}`)
                                                                                           .then( res => res)
                                                                                           .catch( err => err)

export const getLegsByIDs = async (ids:string[]) : Promise<ApiResponse<Leg[]>> => AxiosInstance.get<ApiResponse<Leg[]>>(`/legs?${ids.map(  id => `id=${id}`).join('&')}`)
                                                                                           .then( res => res)
                                                                                           .catch( err => err)

                                                                                           