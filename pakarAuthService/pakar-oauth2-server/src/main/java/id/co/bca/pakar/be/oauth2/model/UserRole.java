package id.co.bca.pakar.be.oauth2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "r_user_role")
public class UserRole extends EntityBase {
	@Id
	@SequenceGenerator(name = "userRoleSeqGen", sequenceName = "userRoleSeq", initialValue = 1, allocationSize = 1)
	@GeneratedValue(generator = "userRoleSeqGen")
	private Long id;
	@ManyToOne
	@JoinColumn(name = "username", nullable = false)
	private User user;
	@ManyToOne
	@JoinColumn(name = "role_id", nullable = false)
	private Role role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	/**
	 * @return the role
	 */
	public Role getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(Role role) {
		this.role = role;
	}
}
