using AutoMapper;
using EPWeb.MockAPI.DTOs;
using EPWeb.MockAPI.Models;

namespace EPWeb.MockAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<User, UserForReturnDto>();
            CreateMap<User, UserForRegisterDto>();
            CreateMap<User, UserForLoginDto>();
            CreateMap<User, UserForAdminListDto>();
            CreateMap<ResourceGroup, ResourceGroupForFilterDto>();
            CreateMap<Resource, ResourceForFilterDto>();
            CreateMap<ResourceAllocation, ResourceAllocationDto>()
                .ForMember(t => t.Text, opt => opt.MapFrom(n => n.Name))
                .ForMember(r => r.ResAllocId, opt => opt.MapFrom(i => i.Id));
            CreateMap<UserForReturnDto, User>();
            CreateMap<UserForReturnDto, User>();
            CreateMap<UserForLoginDto, User>();
        }
    }
}