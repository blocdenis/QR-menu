from rest_framework.permissions import BasePermission

class IsAdminWithSomeRights(BasePermission):
    def has_permission(self, request, view):
        # Добавьте собственную логику проверки прав админа
        return request.user.is_authenticated and request.user.has_some_admin_rights
