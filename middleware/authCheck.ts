export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession();
  const route = useRoute();
  const reRoute = useRouter();
  if (to.path === '/settings') {
    if (!loggedIn.value) {
      if (route.path === '/settings') {
        return reRoute.push('/');
      }
      return abortNavigation();
    }
  }
});
