package com.fixer.app.employee.dao;

import org.springframework.stereotype.Repository;

import com.fixer.app.employee.domain.Department;

/**
 * Department DAO.
 * 
 * @author shubham
 *
 */
@Repository("departmentDAO")
public class DepartmentDAO extends AbstractDao<Integer, Department> {
 
    public Department findById(Integer id) {
    	Department department = getByKey(id);
        return department;
    }
 
    public Boolean save(Department department) {
		Boolean result = persist(department);
		return result;
    }
}